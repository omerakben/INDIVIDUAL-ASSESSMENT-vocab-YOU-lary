import { deleteVocab, getVocab } from './vocabData';
import { deleteLanguage, getLanguages } from './languageData';

const getVocabWithLanguages = async (uid) => {
  const vocab = await getVocab(uid);
  const languages = await getLanguages(uid);

  const vocabWithLanguages = vocab.map((entry) => ({
    ...entry,
    languageDetails: languages.find((lang) => lang.firebaseKey === entry.language_id) || {}
  }));

  return vocabWithLanguages;
};

const deleteLanguageAndVocab = async (languageId) => {
  const vocab = await getVocab();
  const relatedVocab = vocab.filter((entry) => entry.language_id === languageId);

  const deleteVocabPromises = relatedVocab.map((entry) => deleteVocab(entry.firebaseKey));
  await Promise.all(deleteVocabPromises);

  return deleteLanguage(languageId);
};

const searchVocab = async (searchTerm, uid) => {
  const allVocab = await getVocabWithLanguages(uid);

  return allVocab.filter((entry) => entry.title.toLowerCase().includes(searchTerm.toLowerCase()) || entry.definition.toLowerCase().includes(searchTerm.toLowerCase()));
};

export {
  getVocabWithLanguages,
  deleteLanguageAndVocab,
  searchVocab,
};
