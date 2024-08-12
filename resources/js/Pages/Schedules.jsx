import * as React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from '@inertiajs/react';
import StudentsTable from "@/Components/StudentsTable.jsx";

const Schedules = ({auth, classrooms, students}) => {
    // const groupedStudents = students.reduce((acc, student) => {
    //     const {classroom_id} = student;
    //     if (!acc[classroom_id]) {
    //         acc[classroom_id] = [];
    //     }
    //     acc[classroom_id].push(student);
    //     return acc;
    // }, {});

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Schedules</h2>}
        >
            <Head title="Schedules"/>

            {classrooms
                .sort((a, b) => {
                    return (a.ordering < b.ordering);
                })
                .map((classroom) => {
                    const classroomStudents = students.filter((student) => {
                        return student.classroom_id === classroom.id;
                    })
                        .sort((a, b) => {
                            return (a.family_name < b.family_name) || (a.first_name < b.first_name);
                        });
                    return (
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="content">
                                        <div>classroom {classroom.label}</div>
                                        <StudentsTable students={classroomStudents}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </AuthenticatedLayout>
    );
}

export default Schedules;