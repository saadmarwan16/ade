import { TActivityDetailsBody } from '@/types/activity_details';
import { FunctionComponent } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface ContentProps {
	body: TActivityDetailsBody;
}

const Content: FunctionComponent<ContentProps> = ({ body }) => {
	return (
		<div className='my-6 md:my-8 lg:my-10 lg:flex lg:justify-center'>
			{/* TODO: The rich text block goes here instead of a paragraph */}
			{/* <p className='max-w-4xl text-base sm:text-lg lg:text-xl xl:text-2xl'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas,
				libero a vehicula tincidunt, risus metus bibendum lectus, nec lacinia
				libero turpis at erat. Nulla facilisi. Phasellus nec nunc nec velit
				lacinia ultricies. Sed auctor mauris nec purus accumsan, vel ultricies
				libero varius. In ultrices, mi in lacinia tincidunt, ligula metus varius
				libero, quis posuere nisl sapien nec nunc. Sed auctor mauris nec purus
				accumsan, vel ultricies libero varius. In ultrices, mi in lacinia
				tincidunt, ligula metus varius libero, quis posuere nisl sapien nec
				nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				egestas, libero a vehicula tincidunt, risus metus bibendum lectus, nec
				lacinia libero turpis at erat. Nulla facilisi. Phasellus nec nunc nec
				velit lacinia ultricies. Sed auctor mauris nec purus accumsan, vel
				ultricies libero varius. In ultrices, mi in lacinia tincidunt, ligula
				metus varius libero, quis posuere nisl sapien nec nunc. Sed auctor
				mauris nec purus accumsan, vel ultricies libero varius. In ultrices, mi
				in lacinia tincidunt, ligula metus varius libero, quis posuere nisl
				sapien nec nunc.
			</p> */}
			<BlocksRenderer content={body} />
		</div>
	);
};

export default Content;
