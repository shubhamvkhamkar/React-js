function Header({headerInfo, cname, children}){
    // console.log(props.headerInfo.email)
  // let {headerInfo,cname} = props;
   // console.log(props.headerInfo, cname)
    return(
        <div>
            <h4>Header section</h4>
        {children}
        <h1>{headerInfo.email} {cname} </h1>
        
        </div>
    )
}

export { Header };