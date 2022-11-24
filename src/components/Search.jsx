import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CiSearch } from "react-icons/ci";
 
export default function SearchElement() {
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
            />
            <Button className='btn-color'><CiSearch className='icon'/></Button>
        </Form>
    </div>
  );
}
