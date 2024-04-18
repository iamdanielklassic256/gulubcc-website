import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { churchServiceApi } from '@/data/data';
import ServiceCard from './ServiceCard';

const ChurchServiceCard = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	React.useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const containerVariants = {
		hidden: { opacity: 0 },

		visible: { opacity: 1, transition: { duration: 2 } },
	};

	return (
		<section
			className="relative w-full lg:pt-10 pt-6 lg:pb-10 pb-6 mt-0 bg-[#d1d5db]"
		>
			<div className="flex items-center justify-center">
				<h1 className="text-[#162352] lg:text-4xl md:text-3xl text-xl font-bold ">
					<span className="bg-[#D67314] rounded-l-2xl p-2 px-4 text-white">CHURCH</span>
					SERVICES
				</h1>
			</div>
			<motion.div
				className="lg:mx-4 mx-2 grid gap-4 items-center justify-between lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mt-10"
				variants={containerVariants}
			>
				{churchServiceApi.map((item) => (
					<motion.div
						key={item.name}
						ref={ref}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 2 } }}
					>
						<ServiceCard
							service_name={item.name}
							language={item.language}
							start={item.startTime}
							end={item.endTime}
							firstColor={item.colorFrom}
							secondColor={item.colorTo}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default ChurchServiceCard;
