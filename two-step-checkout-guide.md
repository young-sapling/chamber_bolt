# 2-Step Checkout Implementation Guide

## Overview
Convert your current single-step checkout into a 2-step process to capture leads even if they abandon.

## Step 1: Personal Information (Lead Capture)
**Goal**: Capture essential contact info before they can abandon

### Required Fields:
- First Name
- Last Name  
- Email Address
- Phone Number
- Business Website URL

### GoHighLevel Setup:
1. Create a **new form** in GoHighLevel called "Step 1 - Lead Capture"
2. Add the 5 fields above
3. Set up **automation** to:
   - Add contact to CRM
   - Send welcome email
   - Tag as "checkout-started"

## Step 2: Payment & Confirmation
**Goal**: Complete the purchase with payment details

### Required Fields:
- Plan confirmation (pre-filled from Step 1)
- Credit Card Number
- Expiry Date
- CVC
- Billing Address (if needed)

### GoHighLevel Setup:
1. Create **second form** called "Step 2 - Payment"
2. Pre-populate contact info from Step 1
3. Set up **automation** to:
   - Process payment
   - Tag as "purchase-complete"
   - Send onboarding sequence

## CSS for 2-Step Progress Indicator

```css
/* Progress Bar Styles */
.checkout-progress {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem 0;
}

.progress-step {
    display: flex;
    align-items: center;
    color: #6b7280;
    font-weight: 500;
}

.progress-step.active {
    color: #9333ea;
}

.progress-step.completed {
    color: #10b981;
}

.step-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    font-weight: bold;
    font-size: 14px;
}

.progress-step.active .step-circle {
    background: #9333ea;
    color: white;
}

.progress-step.completed .step-circle {
    background: #10b981;
    color: white;
}

.progress-step:not(.active):not(.completed) .step-circle {
    background: #e5e7eb;
    color: #6b7280;
}

.progress-connector {
    width: 60px;
    height: 2px;
    background: #e5e7eb;
    margin: 0 1rem;
}

.progress-connector.completed {
    background: #10b981;
}

/* Step Content Styles */
.step-content {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.step-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.step-description {
    color: #6b7280;
    margin-bottom: 2rem;
}

/* Button Styles */
.btn-continue {
    background: linear-gradient(to right, #9333ea, #ec4899);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.btn-continue:hover {
    background: linear-gradient(to right, #7c3aed, #db2777);
    transform: scale(1.02);
}

.btn-back {
    background: transparent;
    color: #6b7280;
    padding: 12px 24px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 1rem;
}

.btn-back:hover {
    background: #f9fafb;
    border-color: #9ca3af;
}
```

## JavaScript for Step Management

```javascript
// 2-Step Checkout Management
class TwoStepCheckout {
    constructor() {
        this.currentStep = 1;
        this.formData = {};
        this.init();
    }

    init() {
        this.showStep(1);
        this.bindEvents();
    }

    bindEvents() {
        // Step 1 form submission
        document.getElementById('step1-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleStep1Submit();
        });

        // Step 2 form submission
        document.getElementById('step2-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleStep2Submit();
        });

        // Back button
        document.getElementById('back-btn').addEventListener('click', () => {
            this.goToStep(1);
        });
    }

    showStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.checkout-step').forEach(step => {
            step.style.display = 'none';
        });

        // Show current step
        document.getElementById(`step-${stepNumber}`).style.display = 'block';

        // Update progress indicator
        this.updateProgress(stepNumber);
        this.currentStep = stepNumber;
    }

    updateProgress(currentStep) {
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNum < currentStep) {
                step.classList.add('completed');
            } else if (stepNum === currentStep) {
                step.classList.add('active');
            }
        });

        document.querySelectorAll('.progress-connector').forEach((connector, index) => {
            connector.classList.toggle('completed', index + 1 < currentStep);
        });
    }

    async handleStep1Submit() {
        // Collect form data
        const formData = new FormData(document.getElementById('step1-form'));
        this.formData = Object.fromEntries(formData);

        try {
            // Submit to GoHighLevel (Step 1 form)
            await this.submitToGoHighLevel(this.formData, 'step1');
            
            // Move to step 2
            this.goToStep(2);
            this.prefillStep2();
        } catch (error) {
            console.error('Step 1 submission failed:', error);
            alert('There was an error. Please try again.');
        }
    }

    async handleStep2Submit() {
        // Collect payment data
        const paymentData = new FormData(document.getElementById('step2-form'));
        const fullData = { ...this.formData, ...Object.fromEntries(paymentData) };

        try {
            // Submit to GoHighLevel (Step 2 form)
            await this.submitToGoHighLevel(fullData, 'step2');
            
            // Redirect to thank you page
            window.location.href = '/thank-you';
        } catch (error) {
            console.error('Step 2 submission failed:', error);
            alert('Payment failed. Please check your details and try again.');
        }
    }

    async submitToGoHighLevel(data, step) {
        const webhookUrl = step === 'step1' 
            ? 'YOUR_STEP1_WEBHOOK_URL' 
            : 'YOUR_STEP2_WEBHOOK_URL';

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    prefillStep2() {
        // Pre-fill step 2 with step 1 data
        document.getElementById('confirm-name').textContent = 
            `${this.formData.firstName} ${this.formData.lastName}`;
        document.getElementById('confirm-email').textContent = this.formData.email;
        document.getElementById('confirm-phone').textContent = this.formData.phoneNumber;
    }

    goToStep(stepNumber) {
        this.showStep(stepNumber);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new TwoStepCheckout();
});
```

## HTML Structure for 2-Step Form

```html
<!-- Progress Indicator -->
<div class="checkout-progress">
    <div class="progress-step active">
        <div class="step-circle">1</div>
        <span>Contact Info</span>
    </div>
    <div class="progress-connector"></div>
    <div class="progress-step">
        <div class="step-circle">2</div>
        <span>Payment</span>
    </div>
</div>

<!-- Step 1: Contact Information -->
<div id="step-1" class="checkout-step">
    <div class="step-content">
        <h2 class="step-title">Let's Get Started</h2>
        <p class="step-description">First, we need some basic information about you and your business.</p>
        
        <form id="step1-form">
            <!-- Your GoHighLevel Step 1 form embed here -->
            <div class="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" required>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" required>
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required>
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" required>
            </div>
            <div class="form-group">
                <label>Business Website</label>
                <input type="url" name="businessUrl" required>
            </div>
            
            <button type="submit" class="btn-continue">
                Continue to Payment →
            </button>
        </form>
    </div>
</div>

<!-- Step 2: Payment Information -->
<div id="step-2" class="checkout-step" style="display: none;">
    <div class="step-content">
        <h2 class="step-title">Complete Your Order</h2>
        <p class="step-description">You're almost done! Just add your payment details below.</p>
        
        <!-- Order Summary -->
        <div class="order-summary">
            <h3>Order Summary</h3>
            <p><strong>Name:</strong> <span id="confirm-name"></span></p>
            <p><strong>Email:</strong> <span id="confirm-email"></span></p>
            <p><strong>Phone:</strong> <span id="confirm-phone"></span></p>
        </div>
        
        <form id="step2-form">
            <!-- Your GoHighLevel Step 2 form embed here -->
            <div class="form-group">
                <label>Card Number</label>
                <input type="text" name="cardNumber" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Expiry Date</label>
                    <input type="text" name="expiryDate" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                    <label>CVC</label>
                    <input type="text" name="cvc" required>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" id="back-btn" class="btn-back">
                    ← Back
                </button>
                <button type="submit" class="btn-continue">
                    Complete Order
                </button>
            </div>
        </form>
    </div>
</div>
```

## GoHighLevel Implementation Steps:

1. **Create 2 separate forms** in GoHighLevel
2. **Set up automations** for each step
3. **Replace the current single form** with this 2-step structure
4. **Add the CSS and JavaScript** to your page
5. **Update webhook URLs** in the JavaScript
6. **Test the complete flow**

## Benefits:
- ✅ **Capture leads** even if they abandon at payment
- ✅ **Better conversion tracking** (step 1 vs step 2 completion)
- ✅ **Follow-up opportunities** for abandoned checkouts
- ✅ **Improved user experience** with progress indication
- ✅ **Higher perceived value** with structured process

This approach will significantly improve your lead capture rate and give you more opportunities to convert abandoned checkouts!