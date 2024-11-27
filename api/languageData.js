import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguages = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const firebaseKey = data.name;
      const languageWithKey = { ...payload, firebaseKey };
      return updateLanguage(languageWithKey);
    })
    .then(resolve)
    .catch(reject);
});

const deleteLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getLanguages, createLanguage, updateLanguage, deleteLanguage
};
