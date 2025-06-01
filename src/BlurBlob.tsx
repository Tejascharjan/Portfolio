const BlurBlob = ({
     position,
     size,
}: {
     position: { top: number | string; left: number | string };
     size: { width: number | string; height: number | string };
}) => {
     return (
          <div
               className='absolute'
               style={{
                    top: position.top,
                    left: position.left,
                    width: size.width,
                    height: size.height,
                    transform: "translate(-50%, -50%)",
               }}
          >
               <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob' />
          </div>
     );
};

export default BlurBlob;
