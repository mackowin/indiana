<template>
    <section class="contact-area ptb-80" style="background-color: white">
        <SectionSix id="contact"/>
        <div class="container">
            <div class="section-title contact-title">
                <h2>Get In Touch</h2>
                <div class="bar"></div>
                <p>Aggregate and prioritize visual feedback - how can we help?</p>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12">
                    <img src="../../../assets/img/contact.svg" >
                </div>

                <div class="col-lg-6 offset-lg-1 col-md-12">
                    <div class="calendly">
                        <font-awesome-icon class="fa-2x calendly-icon" icon="calendar-alt" />
                        <p class="calendly-input">Send us a message:</p>
                    </div>
                    <div v-if="show_contact && contact_notice != ''" class="alert alert-warning">
                        There was a problem submitting your message. {{ contact_notice }}
                    </div>
                    <form v-if="show_contact" id="contactForm" @submit.prevent="sendContactMessage()">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <input type="text" v-model="contact_name" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <input type="email" v-model="contact_email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <textarea name="message" v-model="contact_message" class="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12  d-flex justify-content-center justify-content-lg-start">
                                <button type="submit" class="btn btn-primary btn-assess" style="margin: 0px">Send Message</button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                    <div v-else>
                        <h4>Message Sent Successfully!</h4>
                        <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ContactTemplate',
        data() {
            return {
                contact_name: '',
                contact_email: '',
                contact_message: '',
                show_contact: true,
                contact_notice: ''
            }
        },
        methods: {
            async sendContactMessage() {
                if(!this.validateEmail(this.contact_email)) {
                    this.contact_notice = "The email address is badly formatted.";
                } else {
                    const url = `/api/contact/landing`;
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body: JSON.stringify({ name: this.contact_name, email: this.contact_email, message: this.contact_message })
                    };
                    fetch(url, requestOptions).then(this.show_contact = false)
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(String(email).toLowerCase());
            }
        }
    }
</script>
