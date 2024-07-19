import { ClassType } from '@/shared/types';

function Class({ name, description, image }: ClassType) {
  const overlayStyles =
    'absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90';

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt="image1" src={image} />
    </li>
  );
}

export default Class;
