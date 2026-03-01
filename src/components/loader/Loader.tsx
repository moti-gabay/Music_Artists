export const Loader = ({ message }: { message: string }) => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <p className="text-xl font-semibold text-gray-600">{message}</p>
    </div>
);