import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Lorem, ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Lorem, ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Lorem, ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Lorem, ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Lorem, ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Lorem, ipsum dolor.',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing. ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
