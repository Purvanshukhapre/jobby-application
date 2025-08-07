import './filter.css';

const Filter = (props)=>{

    const {jobsFilter,salfilter} = props;

    const empArr = [
        {
            id : "FULLTIME",
            value : "Full-Time"
        },
        {
            id : "PARTTIME",
            value : "Part-Time"
        },
        {
            id : "INTERNSHIP",
            value : "Internship"
        },
        {
            id : "FREELANCE",
            value : "Freelance"
        }
    ]

    const salary = [
        {
            id : "1000000",
            value : "10 LPA or above"
        },
        {
            id : "2000000",
            value : "20 LPA or above"
        },
        {
            id : "3000000",
            value : "30 LPA or above"
        },
        {
            id : "4000000",
            value : "40 LPA or above"
        }
    ]

    const filterTypeEmp = (checked)=>{

        jobsFilter(checked.target.checked,checked.target.value);
        // console.log(e)
        
    }

    const salaryRange = (id)=>{
        salfilter(id.target.value);
    }

    const filterEmp = (e)=>{

        const {id,value} = e;

        // console.log(id,value)

        return(
            <li key={id}>
                <input id={id} value={id} onChange={filterTypeEmp} type="checkbox" className='mr-2 ml-2'/>
                <label htmlFor={id}>{value}</label>
            </li>
        )
    }

    const filterSalary = (e)=>{

        const {id,value} = e;

        return(
            <li id='list-item' key={id}>
                <input id={id} value={id} onChange={salaryRange} name='salary' type="radio" className='mr-2 ml-2'/>
                <label htmlFor={id}>{value}</label>
            </li>
        )
    }


    return(

        <>
        
        <div className='filterSec-cont'>

            <div className='emp-type bg-light'>
                <h5 id='emp'>Employement Type</h5>
            
                <ul style={{paddingTop:"15px",listStyle:"none"}}>
                    {empArr.map((e)=>filterEmp(e))}
                </ul>
            </div>
            <hr style={{border:"2px solid black", marginTop:"0", marginBottom:"0"}} />
            <div className='emp-salary bg-light'>
                <h5 id='sal' className='mb-4'>Salary Range</h5>

                <ul id='ul-tag' style={{paddingTop:"15px",listStyle:"none"}}>
                    {salary.map((e)=>filterSalary(e))}
                </ul>
            </div>

        </div>

        </>
    )
}
export default Filter;