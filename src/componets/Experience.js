import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import "../css/experiance.css";
export default function Experiance() {
  return (
    <div className="backgroundColor">
      <Timeline id="experience" className="timelineStyles" position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              May 2020 - Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" color="text.secondary">
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am currently working as a software engineer at a startup.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              May 2019 - May 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" color="text.secondary">
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I worked as a software engineer at a startup.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              May 2018 - May 2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" color="text.secondary">
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I worked as a software engineer at a startup.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
