import { IconBaseProps } from 'react-icons';
import { IoMdClose } from 'react-icons/io';

type CloseIconProps = IconBaseProps;

export default function CloseIcon(props: CloseIconProps) {
	return <IoMdClose {...props} />;
}
