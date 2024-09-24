import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import "../styles/footer.css"


export default function Footer(){

    return <>
        <footer>
        <div id="email" style={{display:"flex", alignItems:"center"}}> 
            <EmailIcon style={{marginRight: "0.25rem"}}></EmailIcon> 
            email : <a href="" style={{ textDecoration: 'underline', color: 'teal' }}>gichurud02@gmail.com </a> 
            </div>

        <div id="plinks" style={{display:"flex", alignItems:"center"}}> 
            <LinkIcon style={{marginRight: "0.3rem"}}></LinkIcon>
            personal links: </div>
        <div > <a href="https://github.com/FeelingPeachy" style={{ textDecoration: 'underline', color: 'teal' }}>github</a>  |  <a href="https://www.linkedin.com/in/darrengitagama/" style={{ textDecoration: 'underline', color: 'teal' }}>LinkedIn</a>  |  <a href="https://leetcode.com/u/gitagamad02/"  style={{ textDecoration: 'underline', color: 'teal' }}>Leetcode</a> </div>
        </footer>
    </>
    }