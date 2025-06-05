export type Message = {
    query: string;
    answer: string;
    status: 'like' | 'dislike' | 'neutral';
}

export type ChatResponse = {
        query: string;
        answer: string;
        status?: 'like' | 'dislike' | 'neutral';
        results: any[];
}
