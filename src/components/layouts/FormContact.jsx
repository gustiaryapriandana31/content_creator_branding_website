import Label from '../elements/Label';
import Input from '../elements/Input';
import TextArea from '../elements/Textarea';

const FormContact = () => {
    return (
      <div className="bg-gray-900 rounded-tl-3xl rounded-br-3xl p-10 basis-1/2 shadow-xl hover:shadow-green-500/40 translate-x-14 hover:translate-x-2 transition-all duration-400">
        <h1 className="text-center font-bold text-3xl text-green-500">
          Contact Me
        </h1>
        <form action="" className="">
            <div className="mb-3">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" email="email" placeholder="Your Email"/>
            </div>
            <div>
                <Label htmlFor="message">Your Message</Label>
                <TextArea name="message" rows="6"></TextArea>
            </div>
                
        </form>
      </div>
    );
}

export default FormContact;