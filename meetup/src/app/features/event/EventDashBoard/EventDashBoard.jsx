import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';

export const EventDashBoard = () => {
    return (
        <Fragment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        left column
                    </Grid.Column>
                    <Grid.Column width={6}>
                        right column
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}

export default EventDashBoard;
