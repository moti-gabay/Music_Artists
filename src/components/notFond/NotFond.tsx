export const NotFond = ({ aritestName }: { aritestName: string }) => {
    return (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500 text-lg">
                We couldn't find "<span className="text-white font-medium">{aritestName}</span>".
            </p>
            <p className="text-sm text-gray-600 mt-2">Try checking the spelling or search for another artist.</p>
        </div>
    )
}