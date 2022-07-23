export const exerciseOptions = {

    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': 'a6c98ee484msh24dfe7422ff5b1ep1cd61ajsn7804673e2b61',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6c98ee484msh24dfe7422ff5b1ep1cd61ajsn7804673e2b61',
    },
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
