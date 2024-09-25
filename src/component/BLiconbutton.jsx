import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook"; // Import FacebookIcon from MUI

export default function BLIconButton(props) {
  const { label, style, onClick, href  , type} = props;

  if (href) {
    return (
      <div>
        <a href={href} target='blank' style={{ textDecoration: 'none' }}>
          <IconButton style={style} onClick={onClick} type={type}>
            {label}
          </IconButton>
        </a>
      </div>
    );
  }

  return (
    <div>
      <IconButton style={style} onClick={onClick} type={type}>
        {label}
      </IconButton>
    </div>
  );
}
