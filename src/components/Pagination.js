
import {Pagination} from 'react-bootstrap';

export default function Page(){
    return(
        
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        
    )
}

