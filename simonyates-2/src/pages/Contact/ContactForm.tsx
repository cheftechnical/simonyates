/**
 * Resources:
 * https://react-hook-form.com/get-started#IntegratingwithUIlibraries
 */
// import * as React from 'react';
// import {Controller, useForm} from 'react-hook-form';
// import SendIcon from '@material-ui/icons/Send';
import {Message} from './Message';
// import {makeStyles} from '@material-ui/core/styles';
import ButtonContained from '../../styling/ButtonContained/ButtonContained';
import {MyTextField2} from '../../styling/MyTextField2/MyTextField2';

// @source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regexEmailAddress = /\S+@\S+\.\S+/

interface Props {
  onSubmit: (data: Message) => void;
}

// @todo mui5
// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginTop: theme.spacing(16 / 8)
//   }
// }));

export default function ContactForm(props: Props) {
  // const classes = useStyles();

  const {onSubmit} = props;
  // const {control, handleSubmit, formState: {errors}} = useForm();

  // @todo mui5
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       {/* IMPORTANT: ALWAYS INCLUDE A DEFAULT VALUE, OTHERWISE YOU'LL GET AN UNCONTROLLED COMPONENT WARNING */}
  //       <Controller
  //         control={control}
  //         defaultValue=""
  //         name="name"
  //         render={({field}) => {
  //           // console.log('field', field);
  //
  //           return (
  //             <MyTextField2
  //               {...field}
  //               error={!!errors.name}
  //               helperText={errors.name?.message ? errors.name.message.toString() : undefined}
  //               placeholder="Name"
  //             />
  //           )
  //         }}
  //         rules={{
  //           required: 'Your name is required',
  //         }}
  //       />
  //
  //       <Controller
  //         control={control}
  //         defaultValue=""
  //         name="emailAddress"
  //         render={({field}) => (
  //           <MyTextField2
  //             {...field}
  //             error={!!errors.emailAddress}
  //             helperText={errors.emailAddress?.message ? errors.emailAddress.message.toString() : undefined}
  //             placeholder="Email"
  //           />
  //         )}
  //         rules={{
  //           required: 'Your email address is required',
  //           pattern: {
  //             value: regexEmailAddress,
  //             message: 'You must provide a valid email address'
  //           }
  //         }}
  //       />
  //
  //       <Controller
  //         control={control}
  //         defaultValue=""
  //         name="subject"
  //         render={({field}) => (
  //           <MyTextField2
  //             {...field}
  //             error={!!errors.subject}
  //             helperText={errors.subject?.message ? errors.subject.message.toString() : undefined}
  //             placeholder="Subject"
  //           />
  //         )}
  //         rules={{
  //           required: 'A subject is required'
  //         }}
  //       />
  //
  //       <Controller
  //         control={control}
  //         defaultValue=""
  //         name="body"
  //         render={({field}) => (
  //           <MyTextField2
  //             {...field}
  //             multiline
  //             error={!!errors.body}
  //             helperText={errors.body?.message ? errors.body.message.toString() : undefined}
  //             placeholder="Message"
  //             rows={7}
  //           />
  //         )}
  //         rules={{
  //           required: 'A message is required'
  //         }}
  //       />
  //
  //       <ButtonContained
  //         className={classes.button}
  //         endIcon={<SendIcon style={{fontSize: '16px'}}/>}
  //         type="submit"
  //       >
  //         Send
  //       </ButtonContained>
  //
  //     </form>
  //   </div>
  // );

  return (
      <div>[ContactForm]</div>
  )
};
