import LightboxComponent, {
	LightboxExternalProps,
} from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function Lightbox(
	props: Omit<LightboxExternalProps, 'plugins'>
) {
	return (
		<LightboxComponent
			plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Counter]}
			{...props}
		/>
	);
}
