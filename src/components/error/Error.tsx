export const Error = ({ message }: { message: string }) => {
    return (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-4 rounded-xl text-center mb-8 backdrop-blur-md">
            {message}
        </div>
    )
}