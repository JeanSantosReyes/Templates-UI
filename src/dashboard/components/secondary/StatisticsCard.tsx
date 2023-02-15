import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { StatisticProps } from '../../../interfaces/Data_interface';

export const StatisticsCard = ({ title, color, value, icon, footer }: StatisticProps) => {
    return (
        <Card>
            <CardHeader
                variant="gradient"
                color={color}
                className="absolute -mt-4 grid h-16 w-16 place-items-center"
            >
                {icon}
            </CardHeader>
            <CardBody className="p-4 text-right">
                <Typography variant="small" className="font-normal text-blue-gray-600">
                    {title}
                </Typography>
                <Typography variant="h4" color="blue-gray">
                    {value}
                </Typography>
            </CardBody>
            <CardFooter className="border-t border-blue-gray-50 p-4">
                <Typography className="font-normal text-blue-gray-600">
                    <strong className={footer.color}>{footer.value}</strong>
                    &nbsp;{footer.label}
                </Typography>
            </CardFooter>
        </Card>
    )
}
