import '../../styles/navigation/Logo.scss'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Logo = () => {
  return (
    <div className={"logo-container"}>
      <div className="logo-icon">
        <LocalFireDepartmentIcon /> 
      </div>
      <div className="logo-text">
        ActiVi
      </div>
    </div>
  )

}

export default Logo