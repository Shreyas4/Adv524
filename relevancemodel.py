import spacy
import nltk
import numpy as np
nltk.download('wordnet')

spacy.load('en')
from spacy.lang.en import English
parser = English()
def tokenize(text):
    lda_tokens = []
    tokens = parser(text)
    for token in tokens:
        if token.orth_.isspace():
            continue
        elif token.like_url:
            lda_tokens.append('URL')
        elif token.orth_.startswith('@'):
            lda_tokens.append('SCREEN_NAME')
        else:
            lda_tokens.append(token.lower_)
    return lda_tokens

from nltk.corpus import wordnet as wn
def get_lemma(word):
    lemma = wn.morphy(word)
    if lemma is None:
        return word
    else:
        return lemma
    
from nltk.stem.wordnet import WordNetLemmatizer
def get_lemma2(word):
    return WordNetLemmatizer().lemmatize(word)

nltk.download('stopwords')
en_stop = set(nltk.corpus.stopwords.words('english'))

def prepare_text_for_lda(text):
    tokens = tokenize(text)
    tokens = [token for token in tokens if len(token) > 4]
    tokens = [token for token in tokens if token not in en_stop]
    tokens = [get_lemma(token) for token in tokens]
    return tokens


def create_eta(priors, etadict, ntopics):
    eta = np.full(shape=(ntopics, len(etadict)), fill_value=1) # create a (ntopics, nterms) matrix and fill with 1
    for word, topic in priors.items(): # for each word in the list of priors
        keyindex = [index for index,term in etadict.items() if term==word] # look up the word in the dictionary
        if (len(keyindex)>0): # if it's in the dictionary
            eta[topic,keyindex[0]] = 1e7  # put a large number in there
    eta = np.divide(eta, eta.sum(axis=0)) # normalize so that the probabilities sum to 1 over all topics
    return eta

import random
text_data = []
def dictio():
    with open('dataset.csv') as f:
        for line in f:
            tokens = prepare_text_for_lda(line)
            if random.random() > .99:
                print(tokens)
                text_data.append(tokens)

    from gensim import corpora
    dictionary = corpora.Dictionary(text_data)
    return dictionary


dictionary = dictio()
def topic_model_train(n,x):

    corpus = [dictionary.doc2bow(text) for text in text_data]

    import pickle
    pickle.dump(corpus, open('corpus.pkl', 'wb'))
    dictionary.save('dictionary.gensim')

    import gensim
    NUM_TOPICS = 4
    eta = apriori_original = {
    'computers':0, 'network':1, 'software':0, 'algorithm':0, 'electronics':1,'consumer':1,
    'oil':2, 'retail':3  # we'll leave out broccoli from this one!
    }
    eta = create_eta(apriori_original, dictionary, 4)
    ldamodel = gensim.models.ldamodel.LdaModel(corpus, num_topics = NUM_TOPICS,random_state=42, chunksize=100,id2word=dictionary,eta=eta, passes=150)
    ldamodel.save('model512.gensim')


    topics = ldamodel.print_topics(num_words=x)
    for topic in topics:
        print(topic)


    new_doc = 'Programmable system Bayesian Optimization of Machine Learning Algorithms'
    new_doc = prepare_text_for_lda(new_doc)
    new_doc_bow = dictionary.doc2bow(new_doc)
    print(new_doc_bow)
    print(ldamodel.get_document_topics(new_doc_bow))


    lda10 = gensim.models.ldamodel.LdaModel.load('model512.gensim')
    return lda10

def predict(str, lda10):
    topics = lda10.print_topics(num_words=7)
    new_doc = prepare_text_for_lda(str)
    new_doc_bow = dictionary.doc2bow(new_doc) 
    for topic in topics:
        print(topic)
    print(lda10.get_document_topics(new_doc_bow))
    maxi = 0.0
    for x in lda10.get_document_topics(new_doc_bow):
        maxi = max(maxi,x[1])
    return maxi
  

