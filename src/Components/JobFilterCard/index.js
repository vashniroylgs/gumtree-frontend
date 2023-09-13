import './index.css'

const JobFilterCard = (props) => {
    const {updateSalaryRangeId, activeSalaryRangeId,FilterType} = props

    return FilterType.map(eachRange => {
      const onChangeRange = () => updateSalaryRangeId(eachRange.salaryRangeId)

      const isChecked = eachRange.salaryRangeId === activeSalaryRangeId

      return (
        <li className="job-fliters-list-item" key={eachRange.salaryRangeId}>
          <input
            type="radio"
            className="job-checkbox-input"
            id={eachRange.salaryRangeId}
            name="salary ranges"
            onChange={onChangeRange}
            checked={isChecked}
          />
          <label htmlFor={eachRange.salaryRangeId} className="job-filter-label">
            {eachRange.label}
          </label>
          <p className="job-filter-total-posts">{eachRange.posts}</p>
        </li>
      )
    })
  }
  export default JobFilterCard