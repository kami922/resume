import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

function PortfolioBlock(props) {
   const {image, live, source, title, caseStudy, contentType} = props;
   const isInternalLink = typeof live === 'string' && live.startsWith('/');
   const isCaseStudy = caseStudy || contentType === 'case-study';
   const isBlog = contentType === 'blog';

   const renderPrimaryLink = () => {
      if (isCaseStudy && isInternalLink) {
         return (
            <Link to={live} style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
               <i className={'fa fa-book'} aria-hidden="true"/>
               <span>Case Study</span>
            </Link>
         );
      }

      if (isBlog && isInternalLink) {
         return (
            <Link to={live} style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
               <i className={'fa fa-pencil'} aria-hidden="true"/>
               <span>Read Blog</span>
            </Link>
         );
      }

      if (isBlog) {
         return <IconLink link={live} title={'Read Blog'} icon={'fa fa-pencil'}/>;
      }

      return <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>;
   };

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               {renderPrimaryLink()}
            </Box>
            {source && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;