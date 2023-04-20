import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type PostImageProps = {
    src: StaticImageData;
    mobile?: StaticImageData;
    alt: string;
}

function PostImage(props: PostImageProps) {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (props.mobile === null) {
            return () => {};
        }

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <div className="text-center rounded-md">
            <Image
                src={width > 500 ? props.src : (props.mobile || props.src)}
                alt={props.alt}
                placeholder="blur"
            />
        </div>
    );
}

export default PostImage;
