const Title = ({ title }) => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 my-8 font-medium">
                <div className="w-32 border-2 mt-1"></div>
                <div className="text-center">{title}</div>
                <div className="w-32 border-2 mt-1"></div>
            </div>
        </>
    );
};

export default Title;