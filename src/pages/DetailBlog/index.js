import React from 'react'
import {RegisterBg} from '../../assets';
import {Link, Gap} from '../../components' 
import './detailBlog.scss';
import {useHistory} from 'react-router-dom'

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
        <p className="blog-title">Title Blog</p>
        <p className="blog-author">Author - Date Post</p>
        <p className="blog-body">Dolore aliquip sit laboris esse et dolor. Anim cillum sint enim magna nostrud voluptate ullamco. Nisi voluptate ipsum irure voluptate consectetur cillum ullamco magna. Aliquip dolor qui cupidatat occaecat. Fugiat id elit veniam cillum laboris laboris ipsum labore nostrud irure laborum aliquip. Labore aliquip amet esse nulla adipisicing dolore ex duis Lorem ad irure anim officia. Excepteur proident excepteur ad adipisicing consequat dolore.</p>
        <Gap height={20} />
        <Link title="back to Home" onClick={() => history.push("/")}/>
    </div>
  )
}

export default DetailBlog