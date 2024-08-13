package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 运输车辆表（公司的所有车辆信息）
 * @TableName car_move
 */
@TableName(value ="car_move")
@Data
public class CarMove implements Serializable {
    /**
     * 汽车id
     */
    @TableId
    private Integer carId;

    /**
     * 车辆名称
     */
    private String carName;

    /**
     * 车牌号
     */
    private String carNumber;

    /**
     * 车辆头像
     */
    private byte[] carImage;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}