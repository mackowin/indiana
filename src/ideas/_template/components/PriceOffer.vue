<template>

    <div class="pricing-table col-xl-6 col-md-8 col-12 offset-xl-3 offset-md-2 offset-0" style="margin-top: 5rem; padding-top: 1.8rem; padding-left: 0px; padding-right: 0px">
        <div class="price" style="margin-bottom: 0;">
            <span v-if="secondCount > 0 && secondCount < 864000" style="color: #0b5345"><sup>$</sup>169
                <sup style="color: #b30000; font-size: 13px; margin-left: 3px">$</sup><span style="color: #b30000; font-size: 16px; text-decoration: line-through">225</span>
            </span>
            <span v-if="secondCount <= 0 || secondCount >= 864000" style="color: #0b5345"><sup>$</sup>225</span>
        </div>

        <div v-show="secondCount > 0 && secondCount < 864000" style="margin-top: 0.4rem; font-size: 14px; color: #0b5345">
            <span>Valid for: </span>
            <span>
                <span style="font-weight: 600" v-if="days > 0">{{ days }}</span><span v-if="days > 0"> day</span><span v-if="days > 1">s</span>
                <span style="font-weight: 600"> {{ hours }}</span>h :
                <span style="font-weight: 600">{{ minutes }}</span>m :
                <span style="font-weight: 600">{{ seconds }}</span>s
            </span>
        </div>
      
        <ValidationObserver ref="form">
            <form @submit.prevent="handleSubmit" novalidate>

                <div class="form-group register" style="margin-top: 2.5rem">
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <select v-model="user.profession" id="profession" name="profession" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }" style="width: 70%; color: #5457c1; border-color: #5457c1; margin: 0 auto">
                            <option value="" disabled selected hidden>Select template profession</option>
                            <option value="general">I need general EB-2 NIW template</option>
                            <option value="banking_finance">Banking & finance</option>
                            <option value="tech_engineering">Tech (engineering)</option>
                            <option value="tech_nonengineering">Tech (non-engineering)</option>
                            <option value="marketing">Marketing</option>
                            <option value="entrepreneurs">Entrepreneurs</option>
                            <option value="consulting">Consultants</option>
                            <option value="healthcare">Doctors & dentists</option>
                            <option value="research">Research</option>
                        </select>
                        <div v-if="submitted && errors.length" class="invalid-feedback">Select template type</div>
                    </ValidationProvider>
                </div>

                <div v-if="secondCount <= 0 || secondCount >= 864000" class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
                    <button class="btn btn-primary" @click="gtag_report_conversion()" :disabled="account.status.applying">Buy Template <br>+ Discord access
                        <img v-show="account.status.applying" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>
                <div v-if="secondCount > 0 && secondCount < 864000" class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
                    <button class="btn btn-primary" @click="gtag_report_conversion()" :disabled="account.status.applying">Buy Template <br>+ Discord access
                        <img v-show="account.status.applying" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>

            </form>
        </ValidationObserver>

    </div>

</template>


<script>

// 864000 is number of seconds equal to 5 days. Promo updated every 15 days but not shown for the first 5 days


    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'PriceOffer',
        data () {
            return {
              now: Math.trunc((new Date()).getTime() / 1000),
              event: new Date('2022-10-10T10:10:00'),
              finish: true,
              submitted: false,
              user: {
                  profession: '',
              }
            }
          },
          watch: {
            'account.status': function (val) {
              if(val.applied && (this.secondCount > 0 && this.secondCount < 864000) ) {
                window.location.href = "https://www.onet.pl";
              }
              if(val.applied && (this.secondCount <= 0 || this.secondCount >= 864000)) {
                window.location.href = "https://www.wikipedia.com";
              }
            }
          },
          mounted () {
            const _self = this
            window.setInterval(() => {
              this.now = Math.trunc((new Date()).getTime() / 1000)
              if (!this.finish && this.secondCount <= 0) {
                _self.finish = true
                _self.$emit('onFinish')
              }
              if (this.finish && this.secondCount > 0) {
                _self.finish = false
                _self.$emit('onStart')
              }
            }, 500)
          },
          methods: {
            ...mapActions('account', ['apply']),
            handleSubmit() {
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                if (!success) {
                  return;
                }
                this.apply(this.user);
              });
            },
            gtag_report_conversion() {
              window.gtag_report_conversion()
            }
          },
          computed: {
            ...mapState({ account: state => state.account,
            }),
            secondCount () {
              return this.datePlusFifteenDays - this.now
            },
            calculatedDate () {
              return Math.trunc(Date.parse(this.event) / 1000)
            },
            datePlusFifteenDays () {
              let i = 15
              if (this.finish && (this.calculatedDate - this.now <= 0)) return Math.trunc(this.event.setDate(this.event.getDate() + i) / 1000)
              return Math.trunc(this.event / 1000)
            },
            seconds () {
              if (this.secondCount < 0) return 0
              return this.secondCount % 60
            },
            minutes () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60) % 60
            },
            hours () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60 / 60) % 24
            },
            days () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60 / 60 / 24)
            }
          },
    }

</script>