import { Time } from "@angular/common";

export class exammodel{
    examname : string;
    examdate : any;
    examtime : any;
    examdatetime : any;
}

export class examdetails{
    exmd_subject_name : string;
    exmd_subject_code : string;
    exmd_full_marks : string;
    exmd_cutoff_marks : string; 
}

export class examdataall{
    exm_name : string;
    exm_date : string;
    exm_time : string;
    exm_id : string;
    exm_doc : string;
    Exam_Dtl : examdetails[];
}

export class SearchExam{
    keyword : string;
    fromdate : any;
    todate : any; 
}

export class SingleObjectExamDetails{
    exmd_id: string;
    exmd_subject_name: string;
    exmd_subject_code: string;
    exmd_full_marks: number;
    exmd_cutoff_marks: number;
}