import Image from 'next/image';

const ImageCard = ({ imgSrc, onClickEvent, idx, selected, windowHeight }) => {
    return (
        <div
            key={idx}
            className={`flex flex-col items-center justify-center padding-3 text-white text-xl rounded-md overflow-hidden ${
                selected && 'border-4 border-rose-600 border-dashed'
            }`}
            onClick={() => onClickEvent(idx)}
        >
            <Image
                className="cursor-pointer transform transition hover:scale-105 duration-300 ease-out"
                src={imgSrc}
                height={windowHeight / 2}
                width={(windowHeight / 2 / 1722) * 618}
            />
        </div>
    );
};

export { ImageCard };
