// Component Secondary
import { StatisticsCard } from "../components"
// Data Statistic
import { StatisticsData } from "../data/Statistics"

export const Statistics = () => {
    return (
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {
                StatisticsData.map(({ title, color, value, icon, footer }) => (
                    <StatisticsCard
                        key={title}
                        title={title}
                        color={color}
                        value={value}
                        icon={icon}
                        footer={footer}
                    />
                ))
            }
        </div>
    )
}
