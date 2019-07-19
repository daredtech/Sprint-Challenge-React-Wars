import React from 'react'
import { Card, Feed} from 'semantic-ui-react'

const Character = (props) => (
    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            haircolor: {props.hair_color}
          </Feed.Content>
          <Feed.Content>
            homeworld: {props.homeworld}
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
 )

    export default Character