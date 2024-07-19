import ActionButton from '@/shared/ActionButton';
import { BenefitType, SetSelectedPageType } from '@/shared/types';
import { motion, type Variants } from 'framer-motion';

const childVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface Props extends BenefitType {
  setSelectedPage: SetSelectedPageType;
}

function Benefit({ icon, title, setSelectedPage, description }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <ActionButton
        type="regular"
        to="contactus"
        setSelectedPage={setSelectedPage}
      >
        <p>Learn More</p>
      </ActionButton>
    </motion.div>
  );
}

export default Benefit;
