// Components Secondary Tables
import { TableProject, TableUser } from "../components";
// Data
import { UsersData } from '../data/Users';
import { ProjectsData } from "../data/Projects";

export const Tables = () => {
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <TableUser users={UsersData} />
            <TableProject projects={ProjectsData} />
        </div>
    )
}
