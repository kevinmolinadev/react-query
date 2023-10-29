import { useQueryNumber } from "./hooks/useQuery";
import './App.css';

const App = () => {
    const query = useQueryNumber();
    return (
        <div>
            {
                query.isFetching
                    ? (<h2>Cargando...</h2>)
                    : (<h2>Número aleatorio: {query.data} </h2>)
            }
            {
                !query.isLoading && query.isError && (<h3>{`${query.error.message}`}</h3>)
            }
            <button onClick={() => query.refetch()} disabled={query.isFetching}>
                {
                    query.isFetching
                        ? <div className="w-5 h-5 animate-spin rounded-full border-4 border-black border-l-white" />
                        : "Generar numero"
                }
            </button>
        </div>
    )
}
export default App;