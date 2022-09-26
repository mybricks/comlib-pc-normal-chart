import { Data, chartTypes, editorNames, defaultGeometryOptions } from '../constants'
// import {  } from 'antd'
const CHART_STYLE = editorNames.CHART_STYLE

export default {
  [CHART_STYLE]: [
    {
      title: '双轴图样式',
      ifVisible({ data }) {
        return data.type === chartTypes.DUAL_AXES
      },
      items: [
        // {
        //   title: '自定义样式',
        //   type: 'Switch',
        //   value: {
        //     get({ data }: EditorResult<Data>) {
        //       return data.lineStyleFn.visible
        //     },
        //     set({ data }: EditorResult<Data>, value: boolean) {
        //       data.lineStyleFn.visible = value
        //     },
        //   },
        // },
        {
          title: '图形配置',
          type: 'Code',
          options: {
            theme: 'light',
            title: '图形配置',
            language: 'javascript',
            comments: '',
            minimap: {
              enabled: false,
            },
            displayType: 'button'
          },
          // ifVisible({ data }: EditorResult<Data>) {
          //   return  data.lineStyleFn.visible
          // },
          value: {
            get({ data }: EditorResult<Data>) {
              return JSON.stringify(data.config.geometryOptions, null, 2) || defaultGeometryOptions
            },
            set({ data }: EditorResult<Data>, value: string) {
              let geometryOptions = []

              try { 
                geometryOptions = eval(decodeURIComponent(value))
              } catch (e) {
                console.error(e)
              }
              
              let isCheck = true
              geometryOptions.map(item => {
                if (item?.geometry !== 'column' && item?.geometry !== 'line'){
                  if (isCheck) {
                    isCheck = false
                  }
                }
              })

              if (isCheck) {
                data.config.geometryOptions = geometryOptions
                data.config = { ...data.config }
              } else {
                console.error('图形配置错误', geometryOptions)
              }
            },
          },
        }
      ]
    }
  ]
}