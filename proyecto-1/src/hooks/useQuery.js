import { useQuery } from "@tanstack/react-query";
const getNumber = async () => {
    const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
    const numberString = await response.text();
    //throw new Error("ERROR EN EL FECHING");
    return +numberString;

}

export const useQueryNumber = () => {
    const query = useQuery({
        queryKey: ["number"],
        queryFn: getNumber,

    });
    return query;
}