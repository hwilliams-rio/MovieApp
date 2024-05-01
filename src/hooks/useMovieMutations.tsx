import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveMovieAPI } from "../apis/RemoveMovie";
import { AddMovieAPI } from "../apis/AddMovie";

const useMovieMutations = () => {
    const queryClient = useQueryClient();

    const removeMovieMutation = useMutation({
        mutationFn: RemoveMovieAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["movies"] });
        },
        onError: (error) => {
            console.error('Error removing movie:', error.message);
        }
    });

    const addMovieMutation = useMutation({
        mutationFn: AddMovieAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["movies"] });
        },
        onError: (error) => {
            console.error('Error adding movie:', error.message);
        }
    });

    return { removeMovieMutation, addMovieMutation };
};

export default useMovieMutations;
