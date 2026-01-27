import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

const facultyListPage = (req, res) => {
    const sortBy = req.query.sort;
    const facultyMembers = getSortedFaculty(sortBy);
    res.render('faculty/list', {
        title: 'Faculty List',
        faculty: facultyMembers,
        currentSort: sortBy
    }); 
};

const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);
    if (!facultyMember) {
        const err = new Error(`Faculty member ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }
    res.render('faculty/details', {
        title: facultyMember.name,
        faculty: facultyMember,
        queryParams: req.query
    });
};

export { facultyListPage, facultyDetailPage };