import React from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
import styles from './style.module.scss'

@withRouter
class LoginLayout extends React.PureComponent {

  render() {
    const { children } = this.props

    return (
      <Layout>
        <Layout.Content>
          <div className={styles.content}>{children}</div>
          <div className={`${styles.footer} text-center`}>
            <ul className="list-unstyled list-inline mb-3">
              <li className="list-inline-item">
                <a href="javascript: void(0);">Terms of Use</a>
              </li>
              <li className="active list-inline-item">
                <a href="javascript: void(0);">Compliance</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript: void(0);">Confidential Information</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript: void(0);">Support</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript: void(0);">Contacts</a>
              </li>
            </ul>
            <p>&copy; 2019 MatMcCann. All rights reserved.</p>
          </div>
        </Layout.Content>
      </Layout>
    )
  }
}

export default LoginLayout
