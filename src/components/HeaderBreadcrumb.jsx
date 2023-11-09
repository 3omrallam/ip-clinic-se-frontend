import { useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  Card,
  Grid,
  Typography,
} from "automation-unified-frontend";

function HeaderBreadcrumb({ title, items }) {
  const navigate = useNavigate();

  return (
    <Grid.Row as={Card} className=" mb-5 ">
      <Grid.Col xs={12}>
        <Typography variant="subtitle1" color="primary-dark">
          {title}
        </Typography>
      </Grid.Col>

      <Grid.Col xs={12}>
        <Breadcrumb maxItems={3} variant="arrows">
          {items?.map((item, index) => (
            <Breadcrumb.Item
              key={index}
              active={index === items.length - 1}
              onClick={() =>
                !!item.url && index !== items.length - 1 && navigate(item.url)
              }
            >
              <Typography color="primary-dark" variant="body2">
                {item.title}
              </Typography>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Grid.Col>
    </Grid.Row>
  );
}

export default HeaderBreadcrumb;
