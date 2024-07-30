import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;


export const useCastVote = () => {
    console.log(SERVER_URL);

    const castVote = async (candidateName: string) => {

        return axios.post(`${SERVER_URL}:${SERVER_PORT}/cast`, {
            "vote": candidateName
        });
    }

    return { castVote };

}