const API_URL = "https://long-midnight-overcoat.glitch.me/";

export const fetchQuestions =async () => {
    const response =await fetch(API_URL);
    return response.json();
}