import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import StudentsTable from "@/Components/StudentsTable.jsx";

const Classrooms = ({auth, students}) => {

    const groupedStudents = students.reduce((acc, student) => {
        const {classroom_id} = student;
        if (!acc[classroom_id]) {
            acc[classroom_id] = [];
        }
        acc[classroom_id].push(student);
        return acc;
    }, {});

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Students</h2>}
        >
            <Head title="Students"/>

            {Object.keys(groupedStudents).map((classroomId) => (
                <div key={classroomId}>
                    <h2>Classroom ID: {classroomId}</h2>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="content">
                                    <StudentsTable students={groupedStudents[classroomId]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </AuthenticatedLayout>
    );
};
export default Classrooms;
